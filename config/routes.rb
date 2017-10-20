Rails.application.routes.draw do
  get "/home", to: "pages#home"
  mount Spina::Engine => "/"
end
