<?php
/*
 * A specialized item for building a site from the menu
 */
//debug($data);
//debug($depth);
//debug($hasChildren);
//debug($numberOfDirectChildren);
//debug($numberOfTotalChildren);
//debug($firstChild);
//debug($lastChild);
//debug($hasVisibleChildren);
//debug($plugin); 

$class = $this->request->params['controller'] == 'webpage_menus'  && $this->request->params['action'] == 'view' ? $param['class'] = 'showClick' : '';

$name = $this->request->params['controller'] == 'webpage_menus'  && $this->request->params['action'] == 'view' ? $param['name'] = 'WebpageMenuForm' : '';

$this->Tree->addItemAttribute('id', false, 'li_' . $data['WebpageMenu']['id']);
$this->Tree->addItemAttribute('data-identifier', false, $data['WebpageMenu']['id']); ?>

<div class="item">
	<?php echo $this->Html->link(__('<span class="icon"> %s </span> <span class="link"> %s </span>', $defaultTemplate[0]['Template']['icon'], $data['WebpageMenu']['item_text']), '#', array('class' => 'toggleClick', 'data-target' => '#form' . $data['WebpageMenu']['id'], 'escape' => false)); ?>
	
    <div id="form<?php echo $data['WebpageMenu']['id']; ?>">
    
    <?php
	echo $this->Form->postlink(__('<i class="icon-remove icon-white"></i>'), array('plugin' => 'webpages', 'controller' => 'webpage_menu_items', 'action' => 'delete', $data['WebpageMenu']['id']), array('class' => 'pull-right btn btn-danger btn-small', 'escape' => false), __('Are you sure you want to delete the %s menu item?', $data['WebpageMenu']['item_text']));
    echo $this->Form->create('WebpageMenuItem', array('class' => 'form-inline', 'url' => array('plugin' => 'webpages', 'controller' => 'webpage_menu_items','action' => 'edit'), 'class' => 'form-inline'));
    echo $this->Form->input('Override.redirect', array('value' => '/install/build', 'type' => 'hidden'));
    echo $this->Form->input('WebpageMenuItem.id', array('type' => 'hidden', 'value' => $data['WebpageMenu']['id']));
    echo $this->Form->input('WebpageMenuItem.menu_id', array('type' => 'hidden', 'value' => $data['WebpageMenu']['menu_id']));
    echo $this->Form->input('WebpageMenuItem.item_text', array('label' => false, 'value' => $data['WebpageMenu']['item_text'], 'div' => array('class' => 'input-prepend'), 'class' => 'prependedInput span1', 'before' => '<span class="add-on">Text</span>'));
    echo $this->Form->input('WebpageMenuItem.item_url', array('label' => false, 'value' => $data['WebpageMenu']['item_url'], 'div' => array('class' => 'input-prepend'), 'class' => 'prependedInput span1', 'before' => '<span class="add-on">&nbsp;&nbsp;Url</span>'));
    echo $this->Form->input('WebpageMenuItem.template', array('options' => array('0' => 'fill this with template names'), 'label' => false, 'div' => array('class' => 'input-prepend'), 'class' => 'prependedInput span1', 'before' => '<span class="add-on">&nbsp;&nbsp;<i class="icon-eye-open"></i>&nbsp;</span>'));
	echo $this->Form->submit('Save', array('div' => false, 'class' => 'btn btn-success btn-small'));
    echo $this->Form->end(); ?>
    
    </div>
</div>