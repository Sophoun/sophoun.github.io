#!/bin/bash
rm -rf out && npm run export && firebase hosting:channel:deploy next --no-authorized-domains