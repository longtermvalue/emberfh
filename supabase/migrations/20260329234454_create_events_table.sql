/*
  # Create Events Table

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text, required) - Event title
      - `description` (text) - Event description
      - `event_date` (date, required) - Date of the event
      - `event_time` (time) - Start time
      - `end_time` (time) - End time
      - `price` (numeric) - Ticket price
      - `max_capacity` (integer) - Maximum attendees
      - `image_url` (text) - Event image
      - `event_type` (text) - Type of event (winemaker_dinner, tasting, class, etc.)
      - `is_active` (boolean) - Whether event is accepting signups
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `event_registrations`
      - `id` (uuid, primary key)
      - `event_id` (uuid, foreign key to events)
      - `name` (text, required) - Guest name
      - `email` (text, required) - Guest email
      - `phone` (text) - Guest phone
      - `guests` (integer) - Number of guests
      - `notes` (text) - Special requests
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Public can view active events
    - Public can create registrations
    - Only authenticated admins can manage events
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  event_date date NOT NULL,
  event_time time,
  end_time time,
  price numeric(10, 2),
  max_capacity integer DEFAULT 50,
  image_url text,
  event_type text DEFAULT 'general',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  guests integer DEFAULT 1,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active events"
  ON events
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Anyone can register for events"
  ON event_registrations
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM events
      WHERE events.id = event_registrations.event_id
      AND events.is_active = true
    )
  );

INSERT INTO events (title, description, event_date, event_time, end_time, price, event_type, image_url) VALUES
  ('Winemaker Dinner: Tuscan Evening', 'Join us for an exclusive five-course dinner paired with exceptional Tuscan wines, featuring live commentary from our sommelier.', '2026-05-23', '18:30', '22:00', 195.00, 'winemaker_dinner', 'https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Scotch Tasting Experience', 'Explore the world of single malt scotch with our curated selection of rare and exceptional expressions from Scotland''s finest distilleries.', '2026-06-07', '19:00', '21:30', 125.00, 'tasting', 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Cocktail Masterclass', 'Learn the art of mixology with our head bartender. Create three signature cocktails and take home the recipes.', '2026-06-14', '16:00', '18:00', 85.00, 'class', 'https://images.pexels.com/photos/5040496/pexels-photo-5040496.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Mediterranean Cooking Class', 'A hands-on experience creating authentic Mediterranean dishes under the guidance of our executive chef.', '2026-06-28', '14:00', '17:00', 150.00, 'class', 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Tequila & Mezcal Journey', 'Discover the nuances between premium tequilas and mezcals, paired with handcrafted bites.', '2026-07-12', '19:00', '21:30', 110.00, 'tasting', 'https://images.pexels.com/photos/4667044/pexels-photo-4667044.jpeg?auto=compress&cs=tinysrgb&w=600');
