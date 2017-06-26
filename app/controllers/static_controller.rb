class StaticController < ApplicationController
  def index
    @background_images = []
    9.times do |i|
      @background_images << "background#{i+1}.jpg"
    end
    puts "#{@background_images.inspect}"
    @images = @background_images.sample(3)
    @color = Faker::Color.color_name
  end
end
