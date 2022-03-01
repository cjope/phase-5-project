source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"
gem "rails", "~> 7.0.1"
gem "pg", "~> 1.1"
gem "bcrypt", "~> 3.1.7"
gem "sqlite3", "~> 1.4"
gem "puma", "~> 5.0"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem 'bootsnap', '>= 1.4.4', require: false


group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

gem "rack-cors"

group :development do
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :development, :test do
  gem 'rspec-rails', '~> 5.0.0'
end

group :test do
  gem 'rspec-json_expectations'
  gem 'shoulda-matchers', '~> 4.0'
end

gem "active_model_serializers", "~> 0.10.12"