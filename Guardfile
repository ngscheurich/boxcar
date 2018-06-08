directories %w[app config lib public spec]

guard :livereload do
  watch(%r{app/helpers/.+\.rb})
  watch(%r{app/views/.+\.(erb|haml)})
  watch(%r{public/.+\.(html|png|jpg|svg|gif)})
  watch(%r{config/locales/.+\.yml})
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html))).*}) do |m|
    "/assets/#{m[3]}"
  end
end
