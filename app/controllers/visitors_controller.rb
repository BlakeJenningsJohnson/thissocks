class VisitorsController < ApplicationController
  http_basic_authenticate_with name: ENV["ADMIN_NAME"], password: ENV["ADMIN_PW"]
                                      #Figaro.env.ADMIN_NAME works, too, but Bookis likes the other way

  def index
  end
  
end
