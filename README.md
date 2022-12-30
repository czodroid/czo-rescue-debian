<!--
Filename: README.md
Author: Olivier Sirol <czo@free.fr>
License: GPL-2.0 (http://www.gnu.org/copyleft)
File Created: 30 December 2022
Last Modified: Friday 30 December 2022, 16:52
$Id:$
Edit Time: 0:00:26
Description:

Copyright: (C) 2022 Olivier Sirol <czo@free.fr>
-->

# Czo Rescue Debian

## Czo Rescue Debian with ZFS

This is my debian live system. A sort of Arch SystemRescue

https://gitlab.com/czo/czo-rescue-debian

It's a Debian Rescue with zfs binaries + 3ware raid +
my configuration files.

Xfce has its whisker menu and its xfce4-xkb plugin. There
is also firefox (no-esr) and firefox-ublock-origin.

It works on amd64.


## Project website
Homepage: https://gitlab.com/czo/czo-rescue-debian

## Project sources
This git repository contains Czo Rescue Debian sources files.
https://gitlab.com/czo/czo-rescue-debian

## Building SystemRescue
SystemRescue can be built for x86_64 or i686 architectures. It must be built
on archlinux if you want to build a 64bit edition, or archlinux32 if you want
to create a 32bit edition. The following packages must be installed on the
build system: archiso, grub, mtools, edk2-shell. You need to use a modified
version of archiso for the build to work and for additional fixes and features
to be present. You can find the required archiso version and patches in the
"patches" folder in this git repository.

The package list contains packages which are not part of the official binary
package repositories. These packages need to be built from sources from the AUR
website. These sources are made of at least a PKGBUILD file and quite often
other related files, such as patches. These can be built using the makepkg
command which generates binary packages. These binary packages must be copied to
a custom package repository which can be hosted locally using httpd or nginx.
The repo-add command must be used to generate the repository package index.
The pacman.conf file must be updated with the address of this repository so
custom packages can be accessed.

The build process can be started by running the build.sh script. It will create
a large "work" sub-directory and the ISO file will be written in the "out"
sub-directory.

