module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | This Company"
    end
  end
end
