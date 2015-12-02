class Api::V1::CommentsController < ApplicationController
  def index
    @data = [
      { author: 'Pete Hunta', text: 'This is one comment' },
      { author: 'Jordan Walker', text: 'This is *another* comment' }    ]
  end
end
