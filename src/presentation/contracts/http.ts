export interface HttpResponse<T = any> {
  statusCode: number
  body: T
}

export interface HttpRequest<T = any> {
  body?: T
  query?: T
  params?: T
  file?: Express.Multer.File
}
