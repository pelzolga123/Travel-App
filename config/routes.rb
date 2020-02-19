Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  resources :deals, only: [:index, :create, :show ]

  get 'deals/:id', to: 'pages#index';
  get 'deals/:id/form', to: 'pages#index';
  root 'pages#index'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
