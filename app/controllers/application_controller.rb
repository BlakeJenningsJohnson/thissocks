class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_visitor
    @current_visitor ||= 
      if session[:visitor_id]
        Visitor.find(session[:visitor_id])
      else
        visitor = Visitor.create(
          ip_address: request.remote_ip, 
          http_user_agent: request.http_user_agent,
          mobile: on_a_phone?
          )
        session[:visitor_id] = visitor.id
        visitor
      end
  end

  def on_a_phone?
    request.user_agent.downcase.include?('mobile')
  end

  helper_method :current_visitor
  helper_method :on_a_phone?
end


  # create_table "visitors", force: true do |t|
  #   t.string   "ip_address"
  #   t.integer  "page_visits"
  #   t.datetime "last_visit"
  #   t.boolean  "mobile"
  #   t.string   "http_user_agent"
  #   t.integer  "socks_found"
  #   t.integer  "socks_lost"
  #   t.integer  "session_time"
  #   t.datetime "created_at"
  #   t.datetime "updated_at"
  # end