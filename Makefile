# Filename: Makefile
# Author: Olivier Sirol <czo@free.fr>
# License: GPL-2.0 (http://www.gnu.org/copyleft)
# File Created: 16 June 2023
# Last Modified: Sunday 02 March 2025, 11:40
# $Id: Makefile,v 1.42 2025/03/02 11:40:09 czo Git $
# Edit Time: 0:19:04
# Description:
#
#            Makefile for czo-rescue-debian
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

iso:
	./make-czo-rescue-debian-iso
	@echo "<- no-docker all done!"

clean:
	rm -fr build-czo-rescue
	@echo "<- clean done!"

realclean: clean

fclean: realclean

re: realclean docker

.PHONY: docker iso clean realclean fclean re

