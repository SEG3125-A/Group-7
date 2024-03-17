CREATE TABLE UserProfile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    job VARCHAR(100),
    company VARCHAR(100),
    image_url VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO UserProfile (
    name,
    age,
    job, 
    company,
    image_url,
    email, 
    password
) VALUES 
    ('John Doe', 30, 'Software Engineer', 'Tech Innovations Inc.', 'https://example.com/user1.jpg', '123hehe@gmail.com','44559898'),
    ('Jane Smith', 28, 'Data Analyst', 'Data Solutions Co.', 'https://example.com/user2.jpg', 'eehwh4562@gmail.com', 'lelele456'),
    ('Alex Johnson', 35, 'Marketing Manager', 'Global Marketing Agency', 'https://example.com/user3.jpg','hedwwwd758@gmail.com', 'ryyyne483'),
    ('Emily Brown', 25, 'Graphic Designer', 'Creative Designs Ltd.', 'https://example.com/user4.jpg', 'darrir2432@gmail.com', 'error234'),
    ('Michael Lee', 32, 'Product Manager', 'Innovate Tech Solutions', 'https://example.com/user5.jpg', 'fishhhh25@gmail.com', '4586');
