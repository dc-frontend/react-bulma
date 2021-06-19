# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added

 - [Card]
   * Add ability to pass in an id, defaults to undefined.

 - [Navbar]
   * Add ability to pass in an id, defaults to undefined.

### Changed

 - [Column]
   * Use className instead of class on Column component (breaking if using class already).

## [1.0.14] - 2020-12-30
### Added

 - Some previous changes were not released due to build not being run before creating npm package.

## [1.0.13] - 2020-12-30
### Changed

 - [ItemGrid]
   * Change handling of props.columns to use parseInt.

### Fixed

 - [ItemGrid] 
   * Fix column reset logic where columns != 3
   * Don't create a title if title prop not passed through.
   * Remove the undefined classname when no classes passed through.
