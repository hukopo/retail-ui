package patches.buildTypes

import jetbrains.buildServer.configs.kotlin.v2018_2.*
import jetbrains.buildServer.configs.kotlin.v2018_2.buildFeatures.PullRequests
import jetbrains.buildServer.configs.kotlin.v2018_2.buildFeatures.pullRequests
import jetbrains.buildServer.configs.kotlin.v2018_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the buildType with id = 'ReactUI_ScreenshotTests'
accordingly, and delete the patch script.
*/
changeBuildType(RelativeId("ReactUI_ScreenshotTests")) {
    failureConditions {

        check(executionTimeoutMin == 0) {
            "Unexpected option value: executionTimeoutMin = $executionTimeoutMin"
        }
        executionTimeoutMin = 60
    }

    features {
        val feature1 = find<PullRequests> {
            pullRequests {
                provider = github {
                    authType = token {
                        token = "credentialsJSON:e85896f8-074d-433d-af0c-704bc784121e"
                    }
                    filterTargetBranch = "refs/heads/master"
                    filterAuthorRole = PullRequests.GitHubRoleFilter.MEMBER
                }
            }
        }
        feature1.apply {
            provider = github {
                serverUrl = ""
                authType = token {
                    token = "credentialsJSON:37119025-2749-4abf-8ed8-ff4221b59d50"
                }
                filterTargetBranch = "refs/heads/master"
                filterAuthorRole = PullRequests.GitHubRoleFilter.MEMBER
            }
        }
    }
}
