import React, { Component } from 'react'

class Grid extends Component {
  constructor(props) {
    super(props)

    let repos
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      repos = props.staticContext.data
    }

    this.state = {
      repos,
      loading: repos ? false : true,
    }
    this.fetchRepos = this.fetchRepos.bind(this)
  }

  componentDidMount() {
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { match, fetchInitialData } = this.props

    if (nextProps.match.params.id !== match.params.id) {
      this.fetchRepos(nextProps.match.params.id)
    }
  }

  fetchRepos(lang) {
    this.setState(() => ({
      loading: true,
    }))

    this.props.fetchInitialData(lang)
      .then((repos) => this.setState(() => ({
        repos,
        loading: false,
      })))
  }
  render() {
    const { repos, loading } = this.state

    if (loading === true) {
      return <h1>LOADING</h1>
    }

    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Grid