const route = {
  method: 'GET',
  path: '/assets/{path*}',
  options: {
    handler: {
      directory: {
        path: [
          'node_modules/govuk-frontend/dist/govuk/assets',
          'app/assets'
        ]
      }
    }
  }
}

export default route
