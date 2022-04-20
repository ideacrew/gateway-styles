# frozen_string_literal: true

module GatewayStyles
  module Rails
    class Engine < ::Rails::Engine
      initializer 'gateway_styles.assets' do |app|
        %w(stylesheets images javascripts).each do |sub|
          app.config.assets.paths << root.join('assets', sub).to_s
        end
      end
    end
  end
end