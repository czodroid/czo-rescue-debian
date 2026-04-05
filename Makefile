# Filename: Makefile
# Author: Olivier Sirol <czo@free.fr>
# License: GPL-2.0 (http://www.gnu.org/copyleft)
# File Created: 16 June 2023
# Last Modified: Sunday 05 April 2026, 11:53
# $Id: Makefile,v 1.42 2026/04/05 11:53:37 czo Git $
# Edit Time: 0:55:24
# Description:
#
# 	     Makefile for Docker to create a
#   	 czo-rescue-debian ISO image
#
#      $@ Target name
#      $< Name of the first dependency
#      $^ List of dependencies
#      $? List of dependencies newer than the target
#      $* Target name without suffix
#
# Copyright: (C) 2023-2026 Olivier Sirol <czo@free.fr>

docker:
	./docker/make-docker

debug:
	./docker/make-docker debug

redo_02_chroot:
	sudo rm -f build-czo-rescue/build.make_02*
	sudo rm -f build-czo-rescue/build.make_03*
	sudo rm -f build-czo-rescue/build.make_04*
	sudo rm -f build-czo-rescue/build.make_05*
	sudo rm -f build-czo-rescue/build.make_06*
	make

redo_03_copyfiles:
	sudo rm -f build-czo-rescue/build.make_03*
	sudo rm -f build-czo-rescue/build.make_04*
	sudo rm -f build-czo-rescue/build.make_05*
	sudo rm -f build-czo-rescue/build.make_06*
	make

redo_04_squashfs:
	sudo rm -f build-czo-rescue/build.make_04*
	sudo rm -f build-czo-rescue/build.make_05*
	sudo rm -f build-czo-rescue/build.make_06*
	make

redo_05_bootloader:
	sudo rm -f build-czo-rescue/build.make_05*
	sudo rm -f build-czo-rescue/build.make_06*
	make

redo_06_iso:
	sudo rm -f build-czo-rescue/build.make_06*
	make

clean:
	sudo rm -fr build-czo-rescue

realclean: clean

fclean: realclean

re: realclean docker

.PHONY: docker iso clean realclean fclean re

