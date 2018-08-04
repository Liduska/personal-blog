import React, { Fragment } from 'react'

export default class Instagram extends React.Component {
  componentDidMount() {
    window.sb_instagram_js_options = {
      sb_instagram_at: '47705767.1677ed0.ed0222922312494392022e823b8df19a',
    }
    var jQueryScript = document.createElement('script')
    document.getElementsByTagName('head')[0].appendChild(jQueryScript)
    jQueryScript.onload = () => {
      var script = document.createElement('script')
      script.src = '/instagram/sb-instagram.js?ver=1.4.8'
      document.getElementsByTagName('head')[0].appendChild(script)
    }
    jQueryScript.src = 'https://code.jquery.com/jquery-1.12.4.min.js'
  }

  render() {
    return (
      <Fragment>
        <div
          id="sb_instagram"
          className="sbi"
          data-id="47705767"
          data-num="5"
          data-res="auto"
          data-cols="5"
          data-options="{&quot;sortby&quot;: &quot;none&quot;, &quot;headercolor&quot;: &quot;&quot;, &quot;imagepadding&quot;: &quot;10&quot;}"
        >
          <div id="sbi_images" className="sm:flex justify-between">
            <div className="sbi_loader bg-grey-light w-full h-48" />
          </div>
        </div>
      </Fragment>
    )
  }
}
