# Dockerfile

FROM ruby:3.2.0

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

# Install the required version of Bundler (2.5.3)
RUN gem install bundler:2.5.3

# Install gems using the correct version of Bundler
RUN bundle _2.5.3_ install

COPY . /app

# Expose port 3001 to the host machine
EXPOSE 3001

# Start the Rails server on port 3001
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"]
