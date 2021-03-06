var Translation={
	'pt-br':{
		/* texts into HTML entities */
		'cloud-info':'Informações sobre os dados de cobertura de nuvens.',
		'cloud-btn':'Cobertura de nuvens',
		'cloud-header':'Sobre os dados de cobertura de nuvens',
		'cloud-main-info':'A estação de processamento das imagens CBERS 4/4A gera '+
		'sistematicamente/automaticamente, como um dos seus produtos, '+
		'uma imagem de cobertura de nuvens e suas sombras para cada cena '+
		'do sensor WFI recebida (cloud mask).'+
		'<br/><br/>'+
		'Uma rotina seleciona todas as cenas WFI/CBERS 4 '+
		'utilizadas no DETER em determinado mês e gera um mosaico '+
		'mensal das áreas cobertas por nuvens.'+
		'<br/><br/>'+
		'Em seguida uma segunda rotina calcula a porcentagem de nuvem '+
		'em cada estado da Amazônia Legal e Cerrado e alimenta o dashboard '+
		'do TerraBrasilis.',
		'cloud-close':'Fechar',
		'txt-civil':'Ano Civil',
		'txt-prodes':'Ano Referência',
		'allTime':'Exibindo dados para todo o intervalo do gráfico:',
		'someMonths':'Exibindo dados para os filtros do gráfico:',
		"submitLogin":"Entrar",
		"submitLogout":"Sair",
		"expired_token":"Seu login expirou. Para ver os dados mais recentes, por favor faça login novamente.",
		'txt14g':'Aviso',
		'txt14h':'O nome de usuário ou senha está incorreto. Verifique se CAPS LOCK está ativado. Se você receber essa mensagem novamente, entre em contato com o administrador do sistema para garantir que você tenha permissão para logar no portal.',
		'txt14i':'Fechar',
		'goto_about':'Ver informações sobre o projeto e a equipe.',
		'goto_video':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'txt1c':'Informações de ajuda para uso do painel',
		'txt1d':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'txt1e':'Fechar',
		'txt1':'Painel DETER - mensal',
		'txt2':'Abrir o Painel Diário',
		'txt2a':'Informação de alteração nos dados',
		'txt2b':'Foi realizada uma atualização da base de dados do DETER Cerrado e os avisos do período de 04/01/2021 até 03/05/2021 agora representam 1.198,00 km² e não mais 1.286,61 km².',
		'txt2c':'Fechar',
		'txt3':'Baixar Dados',
		'downloadBtn':'Baixar os dados em formato CSV.',
		'txt4':'Imprimir Gráficos',
		'txt4p':'Imprimir Gráficos',
		'txt5':'Escurecer/clarear',
		'txt6':'Entrar',
		'txt7':'Problema na comunicação com o servidor.<br>Aguarde alguns minutos e recarregue a página.',
		'txt8':'Filtro:',
		'txt9':'Filtro:',
		'txt10':'Filtro:',
		'txt11':'Filtro:',
		'txt30':'A impressão deste documento utiliza os recursos do navegador e pode apresentar diferenças entre eles.<br />'+
		'A impressão acomoda bem os gráficos quando as configurações são as seguintes:<br />'+
		'&nbsp;&nbsp;&nbsp;- A orientação do papel é do tipo paisagem;<br />'+
		'&nbsp;&nbsp;&nbsp;- O tamanho de papel é A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- E margens padrão do navegador.<br />',
		'txt13':'Aviso',
		'txt14':'Este painel não é afetado pelos filtros definidos no mapa.',
		'txt15':'Análise - Cerrado',
		'title-chart-agreg':'Variação mensal de área do projeto DETER',
		'title-chart-by-state':'Área por Estados',
		'title-chart-by-year':'Área por Anos',
		'txt16':'Filtros por Estados, Classes e Anos',
		'txt17':'A classe <b>Corte Seletivo</b> refere-se ao somatório das classes Corte Seletivo Geométrico e Corte Seletivo Desordenado para o ano referência 2015/2016, quando estas classes ainda não eram discretizadas.',
		'txt18':'Limpar este filtro.',
		'txt19':'Limpar este filtro.',
		'txt20':'Limpar este filtro.',
		'txt21':'Limpar este filtro.',
		'txt22':'Informações complementares',
		'txt23':'As classes que representam avisos de desmatamento são Mineração, Desmatamento com vegetação e Desmatamento com solo exposto.',
		'txt24':'Informações completas sobre o projeto DETER',
		'txt25':'Fechar',
		'txt26':'Baixar os dados.',
		'txt26a':'Baixar a tabela com os avisos de desmatamento em formato CSV.',
		'txt26b':'Baixar o arquivo completo dos avisos de desmatamento em formato Shapefile.',
		'txt27':'Com filtros.',
		'txt28':'Sem filtros.',
		'txt29':'Fechar',
		'header-panel':'| DETER (Avisos)',
		'header-menu':'DETER (Avisos)',
		'maps-sup':'Mapas',
		'analysis-sup':'Gráficos',
		'analysis-des':'PRODES (Desmatamento)',
		'analysis-war':'DETER (Avisos)',
		'map-des':'PRODES (Desmatamento)',
		'map-war':'DETER (Avisos)',
		'goto_video_sup':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'help-sup':'Ajuda',
		'updated':'Atualizado até:',
		/* titles for HTML entities */
		'aggregate_daily':'Alternar para o painel de consulta de dados diários.',
		'prepare_print':'Imprimir esta página utilizando o recurso do navegador.',
		'change_style':'Alternar o estilo de apresentação claro/escuro.',
		'print_page':'Imprimir esta página utilizando o recurso do navegador.',
		'display_warning':'Mais informações sobre as classes.',
		/* Texts inside javascript. */
		'deforestation':'Avisos de desmatamento',
		'num_alerts':'Número de avisos',
		'refresh_data':'Tentar carregar os dados.',
		'months_of_prodes_year':['Ago','Set','Out','Nov','Dez','Jan','Fev','Mar','Abr','Mai','Jun','Jul'],
		'months_of_civil_year':['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
		'footer1':'Gerado pelo INPE/OBT/DPI/TerraBrasilis em',
		'footer2':'sob licença <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">CC BY-SA 4.0</a>',
		'failure_load_data':'Falhou ao carregar os dados.',
		'focus_y_label':'Área (km²)',
		/* 'focus_x_label':'Meses considerando o ano referência (Agosto - Julho)', */
		'overview_x_label':'Seleção temporal',
		'area': 'Área Agregada',
		'percentage': 'Porcentagem de cobertura de nuvem',
		'unit': 'km²',
		'warning_class_prodes':'Classe válida apenas para o ano referência 2015/2016',
		'warning_class':'Classe válida apenas para o ano 2015',
		'barArea_x_label_prodes':'Ano referência (Agosto - Julho)',
		'barArea_x_label':'Ano (Janeiro - Dezembro)',
		'tools': 'Ferramentas',
		'help' : 'Ajuda',
		'video': 'Video Introdutório',
		'about': 'Sobre',
		'contactus': 'Contato',
		'nv-chart-day':'Gráficos - Avisos Diários',
		'nv-daily-amz':'Amazônia Legal',
		'nv-aggreg-amz':'Amazônia Legal',
		'nv-chart-agg':'Gráficos - Agregado Mensal',
		'nv-daily-cer':'Bioma Cerrado',
		'nv-aggreg-cer':'Bioma Cerrado',
		'nv-home':'Home TerraBrasilis',
		'nv-sites':'Páginas relacionadas',
		'nv-map':'Mapa Interativo',
		'toMap': 'Abrir o mapa interativo',
		'toHome': 'Abrir a página inicial com informações sobre o projeto de monitoramento do Cerrado.',
		'tt-contactus': 'Envie sugestões ou perguntas para:',
		'tt-contactus-menu': 'Envie-nos um e-mail com sugestões ou dúvidas sobre o projeto (terrabrasilis@inpe.br)',
		'about-menu':'Sobre',
		'contactus-menu':'Contato',
		'toDailyChart-amz':'Abrir o painel avisos diários para a Amazônia Legal.',
		'toAggregatedChart-amz':'Abrir o painel agregado mensal de avisos para a Amazônia Legal.',
		'toDailyChart-cer':'Abrir o painel avisos diários para o Bioma Cerrado.',
		'toAggregatedChart-cer':'Abrir o painel agregado mensal de avisos para o Bioma Cerrado.',
		'tituloprint': ' | Variação mensal de área do projeto DETER - ano referência (Agosto a Julho)',
		'description-modal':'O TerraBrasilis é uma plataforma desenvolvida pelo INPE para organização, acesso e uso através de um portal web dos dados geográficos produzidos pelos seus programas de monitoramento ambiental.',
		'option-modal':'Não mostrar novamente.'
	},
	'en':{
		/* texts into HTML entities */
		'cloud-info':'Information about cloud coverage data.',
		'cloud-btn':'Cloud cover',
		'cloud-header':'About cloud coverage data.',
		'cloud-main-info':'The CBERS 4/4A image processing station generates, '+
		'automatically/systematically, as one of the products, an image of cloud '+
		'cover and its shadows for each scene of the WFI sensor (cloud mask).'+
		'<br/><br/>'+
		'A routine selects all the WFI/CBERS 4 scenes used in the DETER interpretation '+
		'process for a month and generates a cloud cover mosaic.'+
		'<br/><br/>'+
		'Then, another routine calculates the percentage of cloud from each state of the '+
		'Legal Amazon and Cerrado to feed the TerraBrasilis panels.',
		'cloud-close':'Close',
		'txt-civil':'Civil Year',
		'txt-prodes':'Reference Year',
		'allTime':'Displaying data for entire chart range:',
		'someMonths':'Displaying data for chart\'s filter:',
		"submitLogin":"Login",
		"submitLogout":"Logout",
		"expired_token":"Your login has expired. To see the latest data, please sign in again.",
		'txt14g':'Warning',
		'txt14h':'The username or password is wrong. Verify if CAPS LOCK is enable. If you receive this message again, please contact the system administrator to ensure that you have permission to login in portal.',
		'txt14i':'Close',
		'goto_about':'See informations about the project and team.',
		'goto_video':'Watch the introductory video to see how an user interact with dashboard tools.',
		'txt1c':'Helpful informations about how to use the panel.',
		'txt1d':'Watch the introductory video to see how an user interact with dashboard tools.',
		'txt1e':'Close',
		'txt1':'DETER panel - monthly',
		'txt2':'Open the Daily Panel',
		'txt2a':'Data change information',
		'txt2b':'DETER Cerrado data has been revised for the period from 2021/01/04 to 2021/05/03, consequently, the sum of the notice area that used to be 1,286.61 km² is now 1,198.00 km²',
		'txt2c':'Close',
		'txt3':'Download Data',
		'downloadBtn':'Download data in CSV format.',
		'txt4':'Print Graphs',
		'txt4p':'Print Graphs',
		'txt5':'Darken/Enlighten',
		'txt6':'Login',
		'txt7':'Failure on loading data from server.<br>Try reload after some minutes.',
		'txt8':'Filter:',
		'txt9':'Filter:',
		'txt10':'Filter:',
		'txt11':'Filter:',
		'txt30':'The print this document use the browser resources and may have differences among themselves.<br />'+
		'The charts stay well arranged over the print document when the following configurations is defined:<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper orientation is landscape;<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper size is A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- And the margins is the default of the browser.<br />',
		'txt13':'Warning',
		'txt14':'The map filters isn\'t applied in this panel.',
		'txt15':'Analyses - Cerrado',
		'title-chart-agreg':'Monthly variation of DETER project area',
		'title-chart-by-state':'Area by States',
		'title-chart-by-year':'Area by Years',
		'txt16':'Filters by States, Classes and Years.',
		'txt17':'The <strong>Selective Logging</strong> class refers to the sum of the classes Geometric Selective Logging and Disordered Selective Logging for the year PRODES 2015/2016, when these classes were not yet discretized.',
		'txt18':'Clean this filter.',
		'txt19':'Clean this filter.',
		'txt20':'Clean this filter.',
		'txt21':'Clean this filter.',
		'txt22':'Complementar informations',
		'txt23':'The classes representing deforestation notices are Mining, Deforestation with vegetation and Deforestation with exposed soil.',
		'txt24':'Complete informations about the DETER project.',
		'txt25':'Close',
		'txt26':'Download data.',
		'txt26a':'Download data table with deforestation notices in CSV format.',
		'txt26b':'Download the complete file with deforestation notices in Shapefile format.',
		'txt27':'With filters.',
		'txt28':'Without filters.',
		'txt29':'Close',
		'header-panel':'| DETER (Notices)',
		'header-menu':'DETER (Notices)',
		'maps-sup':'Maps',
		'analysis-sup':'Graphs',
		'analysis-des':'PRODES (Deforestation)',
		'analysis-war':'DETER (Notices)',
		'map-des':'PRODES (Deforestation)',
		'map-war':'DETER (Notices)',
		'goto_video_sup':'Watch the introductory video to see how an user interact with dashboard tools.',
		'help-sup':'Help',
		'updated':'Updated until:',
		/* titles for HTML entities */
		'aggregate_daily':'Exchange by the analysis panel to daily data.',
		'prepare_print':'Print this page using the browser resources.',
		'change_style':'Exchange the presentation style dark/clear.',
		'print_page':'Print this page using the browser resources.',
		'display_warning':'More informations about the classes.',
		/* Texts inside javascript. */
		'deforestation': 'Deforestation notices',
		'num_alerts': 'Number of Notices',
		'refresh_data':'Retry the data load.',
		'months_of_prodes_year':['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'],
		'months_of_civil_year':['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		'footer1':'Generated by the INPE/OBT/DPI/TerraBrasilis in',
		'footer2':'under license <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>',
		'failure_load_data':'Failure in data loading.',
		'focus_y_label':'Area (km²)',
		/* 'focus_x_label':'Months considering reference year (August - July)', */
		'overview_x_label':'Temporal selection',
		'area': 'Aggregated Area',
		'percentage': 'Cloud coverage percent',
		'unit': 'km²',
		'warning_class_prodes':'Class valid only for reference year 2015/2016',
		'warning_class':'Class valid only for year 2015',
		'barArea_x_label_prodes':'Reference year (August - July)',
		'barArea_x_label':'Year (January - December)',
		'tools': 'Tools',
		'help' : 'Help',
		'video': 'Introductory Video',
		'about': 'About',
		'contactus': 'Contact us',
		'nv-chart-day':'Graphs - Daily Notices',
		'nv-daily-amz':'Legal Amazon',
		'nv-aggreg-amz':'Legal Amazon',
		'nv-chart-agg':'Graphs - Monthly Aggregate',
		'nv-daily-cer':'Cerrado Biome',
		'nv-aggreg-cer':'Cerrado Biome',
		'nv-home':'Home TerraBrasilis',
		'nv-sites':'Related pages',
		'nv-map':'Interactive Map',
		'toMap': 'Open the interactive map.',
		'toHome': 'Open the start page with informations about the Cerrado monitoring project.',
		'tt-contactus': 'Send suggestions or questions to:',
		'tt-contactus-menu': 'Send us an e-mail with suggestions or questions about the project (terrabrasilis@inpe.br)',
		'about-menu':'About',
		'contactus-menu':'Contact',
		'toDailyChart-amz':'Open the panel daily notices for Legal Amazon.',
		'toAggregatedChart-amz':'Open the panel aggregate monthly notices for Legal Amazon.',
		'toDailyChart-cer':'Open the panel daily notices for Cerrado Biome.',
		'toAggregatedChart-cer':'Open the panel aggregate monthly notices for Cerrado Biome.',
		'tituloprint': ' | Monthly variation of DETER project area - reference year (August to July)',
		'description-modal':'TerraBrasilis is a platform developed by INPE for the organization, access and use through a web portal of the geographic data produced by its environmental monitoring programs.',
		'option-modal':'Do not show again.'
	}
};