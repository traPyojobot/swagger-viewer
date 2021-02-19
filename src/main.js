import SwaggerUI from 'swagger-ui'
import { SwaggerUIStandalonePreset } from 'swagger-ui-dist'
import { EnumNamesPlugin } from 'swagger-ui-plugin-enum-names'
import urls from './urls'

import './index.css'
import 'swagger-ui/dist/swagger-ui.css'
import 'swagger-ui-plugin-enum-names/dist/index.min.css'

SwaggerUI({
  urls,
  dom_id: '#app',
  deepLinking: true,
  presets: [
    SwaggerUI.presets.apis,
    SwaggerUIStandalonePreset
  ],
  plugins: [
    SwaggerUI.plugins.DownloadUrl,
    EnumNamesPlugin
  ],
  layout: 'StandaloneLayout'
})
