/*
Copyright 2024 New Vector Ltd.
Copyright 2020-2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE in the repository root for full details.
*/

import { DependencyInfo } from "./dep";
import HakEnv from "./hakEnv";

export default async function build(hakEnv: HakEnv, moduleInfo: DependencyInfo): Promise<void> {
    await moduleInfo.scripts.build(hakEnv, moduleInfo);
}
