require "sinatra"
require "yaml"
require "sinatra/cross_origin"

configure do
  enable :cross_origin
end

path = "./db.yml"
yaml = YAML.load_file(path)

get "/" do
  response.headers["Access-Control-Allow-Origin"] = "*"
  content_type :json
  data = yaml["data"]
  # pp data #Debug
  data.to_json
end
