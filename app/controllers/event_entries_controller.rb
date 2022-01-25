class EventEntriesController < ApplicationController
  before_action :set_event_entry, only: [:show, :update, :destroy]

  # GET /event_entries
  def index
    @event_entries = EventEntry.all

    render json: @event_entries
  end

  # GET /event_entries/1
  def show
    render json: @event_entry
  end

  # POST /event_entries
  def create
    @event_entry = EventEntry.new(event_entry_params)

    if @event_entry.save
      render json: @event_entry, status: :created, location: @event_entry
    else
      render json: @event_entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /event_entries/1
  def update
    if @event_entry.update(event_entry_params)
      render json: @event_entry
    else
      render json: @event_entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_entries/1
  def destroy
    @event_entry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_entry
      @event_entry = EventEntry.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_entry_params
      params.require(:event_entry).permit(:gamertag, :user_id, :event_id)
    end
end
