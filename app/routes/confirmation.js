const route = {
  method: 'GET',
  path: '/confirmation',
  handler: (request, h) => {
    const reference = request.yar.get('reference')
    return h.view('confirmation', { reference })
  }
}

export default route
