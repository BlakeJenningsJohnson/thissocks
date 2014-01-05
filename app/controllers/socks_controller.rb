class SocksController < ApplicationController
  before_action :set_sock, only: [:show, :edit, :update, :destroy]

  def index
    @sock = Sock.new
    @found_socks = Sock.search(params[:query]).found
    @lost_socks = Sock.search(params[:query]).lost
  end

  def new
    @sock = Sock.new
  end

  def mark_found
    @sock = Sock.find_by(:id => params[:id])
    @sock[:status] = 'Found'
    @sock.save
    redirect_to "/socks", notice: "AWESOME SOCKS! YOU FOUND IT!"
  end

  def create 
    @sock = Sock.new(sock_params)
    if @sock.save
      flash[:notice] = "We're sorry to hear about your loss. That socks."
      redirect_to "/socks"
    else
      redirect_to "/socks", notice: "There was an error. Try again."
    end
  end

  private

  def sock_params
    params.require(:sock).permit(:size, :color, :distinguishing_markings, :status)
  end

  def set_sock
    @sock = Sock.find(params[:id])
  end

end
