Rails.application.assets.context_class.class_eval do
  include ViewContext
  include ActionView::Context
  include Rails.application.routes.url_helpers
  include ActionView::Helpers
  include ActionView::Helpers::CaptureHelper
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::AssetTagHelper
  include ActionView::Helpers::AssetUrlHelper

  # All custom helpers that you want to use in angular templates
  # must be listed here
  required_helpers = [ApplicationHelper]
  required_helpers.each{ |h| include h }
end
