class Supervisor < User
	has_many :reviews
	has_many :postings
end
