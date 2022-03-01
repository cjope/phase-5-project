class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true

    before_create :case_names

    def case_names
        self.first_name = first_name.capitalize
        self.last_name = last_name.capitalize
        self.username = username.downcase
        self.email = email.downcase
    end

end
