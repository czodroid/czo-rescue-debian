# Filename: Makefile
# Author: Olivier Sirol <czo@free.fr>
# License: GPL-2.0 (http://www.gnu.org/copyleft)
# File Created: 16 June 2023
# Last Modified: Wednesday 27 August 2025, 09:59
# $Id: Makefile,v 1.42 2025/08/27 09:59:22 czo Git $
# Edit Time: 0:42:55
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
# Copyright: (C) 2023-2025 Olivier Sirol <czo@free.fr>

docker:
	./docker/make-docker
	@echo "<- all done!"

debug:
	./docker/make-docker debug

iso:
	./make-czo-rescue-debian-iso

clean:
	sudo rm -fr build-czo-rescue
	@echo "<- clean done!"

realclean: clean

fclean: realclean

re: realclean docker

.PHONY: docker iso clean realclean fclean re

