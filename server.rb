require "sinatra"
require "sinatra/cross_origin"
require "yaml"

configure do
  enable :cross_origin
end

yaml = File.open("./db.yml")
data = YAML.load_stream(yaml)

get "/" do
  response.headers["Access-Control-Allow-Origin"] = "*"
  content_type :json
  introduce = data[0]["page"]["introduce"].to_json
end

get "/achievements" do
  response.headers["Access-Control-Allow-Origin"] = "*"
  content_type :json
  achieve_page = data[0]["page"]["achievement"]
  achievements = data[1]
  achievement = achieve_page.merge(achievements).to_json
end

get "/reviews" do
  response.headers["Access-Control-Allow-Origin"] = "*"
  content_type :json
  review_page = data[0]["page"]["review"]
  reviews = data[2]
  review = review_page.merge(reviews).to_json
end

get "/achievements/:id" do |n|
  response.headers["Access-Control-Allow-Origin"] = "*"
  content_type :json
  id = n.to_i - 1
  achievement = data[1]["achievements"][id]
  # pp achievement.to_json # debug
  achievement.to_json
end

get "/reviews/:id" do |n|
  response.headers["Access-Control-Allow-Origin"] = "*"
  content_type :json
  id = n.to_i - 1
  review = data[2]["reviews"][id].to_json
end
