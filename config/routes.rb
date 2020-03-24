Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  

  resources :deals, only: [:index, :create, :show ]

  get '/lifestyle', to: 'pages#index';  
  get 'deals/:id', to: 'pages#index';
  get 'deals/:id/form', to: 'pages#index';
  root 'pages#index'
  
  devise_for :users, path_names: {sign_in: 'login', sign_out: 'logout'}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
