require "rails_helper"

RSpec.describe EventEntriesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/event_entries").to route_to("event_entries#index")
    end

    it "routes to #show" do
      expect(get: "/event_entries/1").to route_to("event_entries#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/event_entries").to route_to("event_entries#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/event_entries/1").to route_to("event_entries#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/event_entries/1").to route_to("event_entries#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/event_entries/1").to route_to("event_entries#destroy", id: "1")
    end
  end
end
