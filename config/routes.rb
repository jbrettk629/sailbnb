Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create, :destroy]
    # resources :bookings, only: [:create, :destroy]

    resources :users, only: [:create, :show]
    # do
    #   resources :bookings, only: [:index]
    # end

    resources :boats, only: [:create, :show, :index] do
      resources :bookings, only: [:create, :show, :index]
      resources :reviews, only: [:create, :show, :index, :destroy]
    end
    # end

  end

end
