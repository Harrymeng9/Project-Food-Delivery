Create Table customer (
	id SERIAL Primary Key NOT NULL,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	home_address varchar(50),
	home_city varchar(50),
	home_state varchar(50),
	home_zipcode integer,
	created_at date
);

Create Table business (
	customer_id integer,
	restaurant_id integer
);

Create Table restaurant (
	id SERIAL Primary Key NOT NULL,
	name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	address varchar(50) NOT NULL,
	city varchar(50) NOT NULL,
	state varchar(50) NOT NULL,
	zipcode integer NOT NULL,
  reviews_id SERIAL NOT NULL,
  phone_number varchar(50) NOT NULL,
  menu_id SERIAL NOT NULL,
	created_at date
);


Create Table recommendation (
	id integer,
	review_id integer
);

Create Table review (
	id SERIAL Primary Key NOT NULL,
  created_at date,
  content varchar(100) NOT NULL,
  star integer NOT NULL
);

Create Table menu (
	menu_id integer,
	food_id integer
);

Create Table food (
	id SERIAL,
	name varchar(50) NOT NUll,
  price Numeric(10,2) NOT NUll,
  description varchar(100) NOT NUll,
  image bytea
);

