import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Search = memo(function Search({search}) {
  return (
    <div>
      
    </div>
  )
})
Search.defaultProps = {
  search: 'technology'
}

Search.propTypes = {
  search: PropTypes.string
}

export default Search
