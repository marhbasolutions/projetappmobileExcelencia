<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerFhIxenA\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerFhIxenA/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerFhIxenA.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerFhIxenA\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerFhIxenA\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'FhIxenA',
    'container.build_id' => '0ffbcb9e',
    'container.build_time' => 1597842740,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerFhIxenA');
