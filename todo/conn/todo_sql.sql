create database `todo`;
use todo;
create user 'todo'@'%' identified by 'todo100!';
grant all privileges on todo.* to 'todo'@'%';
flush privileges;

CREATE TABLE `member` (
  `idx` int NOT NULL AUTO_INCREMENT,
  `id` varchar(30) NOT NULL,
  `pw` varchar(255) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `addr` varchar(100) DEFAULT NULL,
  `regdate` int NOT NULL,
  `regip` varchar(30) NOT NULL,
  `moddate` varchar(30) DEFAULT NULL,
  `modip` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `count_user` (
  `c_idx` int NOT NULL AUTO_INCREMENT,
  `idx` int NOT NULL,
  `id` varchar(30) NOT NULL,
  `regdate` int NOT NULL,
  `regip` varchar(30) NOT NULL,
  PRIMARY KEY (`c_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;

CREATE TABLE `schedule` (
  `s_idx` int NOT NULL AUTO_INCREMENT,
  `idx` int NOT NULL,
  `class` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'd:일일/w:주간/m:월간/y:연간/r:급한일/p:프로젝트..나중에 추가할 예정..',
  `group` varchar(30) DEFAULT NULL COMMENT '프로젝트:그룹명',
  `progress` varchar(10) DEFAULT NULL COMMENT '프로젝트:진척도',
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` text,
  `s_sdate` int NOT NULL COMMENT '스케줄시작날짜',
  `s_stime` varchar(5) DEFAULT NULL COMMENT '스케줄시작시각',
  `s_edate` int NOT NULL COMMENT '스케줄종료날짜',
  `s_etime` varchar(5) DEFAULT NULL COMMENT '스케줄종료시각',
  `success` varchar(1) DEFAULT NULL COMMENT 'y:성공',
  `regdate` int NOT NULL,
  `regip` varchar(30) NOT NULL,
  `moddate` int DEFAULT NULL,
  `modip` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`s_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;