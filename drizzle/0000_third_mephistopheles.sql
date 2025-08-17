CREATE TABLE `bible-project_person` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256) NOT NULL,
	`fatherId` integer,
	`motherId` integer,
	`birthYear` integer,
	`deathYear` integer,
	`birthDate` text(100),
	`deathDate` text(100),
	`generalInfo` text,
	`biblicalReferences` text,
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `bible-project_person` (`name`);--> statement-breakpoint
CREATE INDEX `father_idx` ON `bible-project_person` (`fatherId`);--> statement-breakpoint
CREATE INDEX `mother_idx` ON `bible-project_person` (`motherId`);--> statement-breakpoint
CREATE TABLE `bible-project_post` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256),
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `bible-project_post` (`name`);--> statement-breakpoint
CREATE TABLE `bible-project_relationship` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`person1Id` integer NOT NULL,
	`person2Id` integer NOT NULL,
	`relationshipType` text(50) NOT NULL,
	`startYear` integer,
	`endYear` integer,
	`notes` text,
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `person1_idx` ON `bible-project_relationship` (`person1Id`);--> statement-breakpoint
CREATE INDEX `person2_idx` ON `bible-project_relationship` (`person2Id`);