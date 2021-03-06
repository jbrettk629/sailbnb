class User < ApplicationRecord

  after_initialize :ensure_session_token

  validates :name, :email, :password_digest, :session_token, presence:true
  validates :email, :session_token, uniqueness:true
  validates :password, length: {minimum:6, allow_nil:true}

  has_many :bookings

  has_many :reviews,
   through: :bookings,
   source: :review

  has_one_attached :photo


  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    @user && @user.is_password(password) ? @user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
