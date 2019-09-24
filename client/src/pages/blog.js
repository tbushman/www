import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import StoryItem from '../components/story-item.js'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

// const Blog = props => {
class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }
  
  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    const { allMongodbUssBlog } = this.props.data
    // console.log(props)
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <ul style={{height:'auto',minHeight:'100vh'}}>
            {
              allMongodbUssBlog.edges.map(({ node }) => (
                <StoryItem item={node} key={node.id} />
              ))
            }
            
            </ul>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>

    )

  }
}
  // if (data) {

  // } else {
  //   return (
  //     <Layout>
  //       <h1>Hi from the blog</h1>
  //       <Link to="/">Go back to the homepage</Link>
  //       <h3>No data yet</h3>
  //     </Layout>
  //   )
  // }
  
// }

export default Blog

export const pageQuery = graphql`
  query {
    allMongodbUssBlog {
      edges {
        node {
          mongodb_id
          id
          title
          lede
          category
          date
          author
          body
        }
      }
    }
  }
`