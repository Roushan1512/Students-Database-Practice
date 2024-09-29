--@block
use school
--@block
create table students (
    roll int,
    name varchar(255),
    age int,
    batch varchar(255)
);
--@block
alter table students add primary key (roll);
--@block
alter table students modify roll int auto_increment;
--@block
insert into students (name, age, batch) values ("Harry",25,"a1");
--@block
select * from students;
--@block
create table courses (
    roll int,
    subject varchar(255),
    course varchar(255)
);
--@block
alter table courses add foreign key (roll) references students (roll);
--@block
insert into students (name, age, batch) values ("John",19,"b2");
--@block
delete from students;
alter table students auto_increment = 1;
--@block
insert into courses values (1, "qwerty","lkj");
--@block
delete from courses;