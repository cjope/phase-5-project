class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :perishable, :extension, :receive_date, :extended_date, :timeframe
end
