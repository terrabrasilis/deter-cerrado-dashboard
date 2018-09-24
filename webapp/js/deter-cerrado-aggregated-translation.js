var Translation={
	'pt-br':{
		/* texts into HTML entities */
		'txt1':'Painel DETER - mensal',
		'txt2':'Abrir o Painel Diário',
		'txt2a':'Informações gerais',
		'txt2b':'<h3>Sobreposição PRODES Amazônia x Cerrado</h3>'+
		'<br /><br />'+
		'O Mapeamento do cerrado é realizado para toda extensão do Bioma, o que inclui uma zona de sobreposição com os limites da Amazônia Legal Brasileira. Ocorre que as áreas de florestas, dentro da zona de sobreposição entre os limites do Bioma Cerrado e os limites da Amazônia Legal, 7% da área total, já são mapeadas, desde 1988, pelo projeto PRODES Amazônia. Nesta área de sobreposição o INPE utilizou os dados  já mapeados pelo PRODES Amazônia, para evitar resultados discrepantes entre os dois produtos. Apesar dos dois mapeamentos possuírem a mesma legenda (i.e. desmatamento do tipo corte raso) existe uma peculiaridade em relação ao início de suas séries históricas e frequências de mapeamento.'+
		'<br /><br />'+
		'O PRODES Cerrado tem uma série histórica com início no ano 2000 e possui frequência de mapeamento bianual até 2012 e anual desde 2013 até 2017. O PRODES Amazônia tem sua série histórica com início em 1988 e possui frequência anual de mapeamento, entretanto durante esse período foi necessário fazer um ajuste geométrico na máscara de desmatamento para corrigir deslocamentos causados por diferentes processos de georreferenciamento das imagens adotados ao longo da vida do projeto. <a href="http://www.obt.inpe.br/OBT/assuntos/programas/amazonia/prodes/pdfs/nt_deslocamentomascara.pdf" target="_blank">Acesse este link para mais detalhes.</a>'+
		'<br /><br />'+
		'Este ajuste na máscara de desmatamento do PRODES Amazônia resultou em uma agregação de todos os anos mapeados até 2008 em um único plano de informação, não sendo possível separar a geometria do desmatamento dos anos anteriores. Uma vez que os números computados pelo PRODES Cerrado são referentes ao desmatamento mapeado a partir da máscara agregada do ano 2000, início de sua série histórica, os mesmos não consideram a área de desmatamento acumulado até o ano 2000.'+
		'<br /><br />'+
		'Por essa razão, ainda que esta diferença ocorra apenas na área de sobreposição (7% da área total), os números do desmatamento anual publicados no dashboard do TerraBrasilis (www.dpi.inpe.br/fipcerrado/dashboard/) não são iguais aos dados geográficos disponibilizados para download no mesmo site, exclusivamente para os anos 2000 até 2008.',
		'txt2c':'Fechar',
		'txt3':'Baixar CSV',
		'txt4':'Imprimir',
		'txt5':'Escurecer/clarear',
		'txt6':'Entrar',
		'txt7':'Não há dados.',
		'txt8':'Filtro:',
		'txt9':'Filtro:',
		'txt10':'Filtro:',
		'txt11':'Filtro:',
		'txt12':'A impressão deste documento utiliza os recursos do navegador e pode apresentar diferenças entre eles.<br />'+
		'A impressão acomoda bem os gráficos quando as configurações são as seguintes:<br />'+
		'&nbsp;&nbsp;&nbsp;- A orientação do papel é do tipo paisagem;<br />'+
		'&nbsp;&nbsp;&nbsp;- O tamanho de papel é A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- E margens padrão do navegador.<br />',
		'txt13':'Aviso',
		'txt14':'Este painel não é afetado pelos filtros definidos no mapa.',
		'txt15':'Variação da detecção de área do projeto DETER, com granularidade mensal e sazonalidade ano PRODES (Agosto a Julho)',
		'txt16':'Filtros por Estados, Classes e ano PRODES (Agosto a Julho)',
		'txt17':'A classe <b>Corte Seletivo</b> refere-se ao somatório das classes Corte Seletivo Geométrico e Corte Seletivo Desordenado para o ano PRODES 2015/2016, quando estas classes ainda não eram discretizadas.',
		'txt18':'Limpar este filtro.',
		'txt19':'Limpar este filtro.',
		'txt20':'Limpar este filtro.',
		'txt21':'Limpar este filtro.',
		'txt22':'Informações complementares',
		'txt23':'As classes que representam alertas de desmatamento são Mineração, Desmatamento com vegetação e Desmatamento com solo exposto.',
		'txt24':'Informações completas sobre o projeto DETER',
		'txt25':'Fechar',
		'txt26':'Concluir',
		/* titles for HTML entities */
		'aggregate_daily':'Alternar para o painel de consulta de dados diários.',
		'download-csv-monthly':'Baixar os dados brutos, granularidade mensal, em formato CSV.',
		'prepare_print':'Imprimir esta página utilizando o recurso do navegador.',
		'change_style':'Alternar o estilo de apresentação claro/escuro.',
		'print_page':'Imprimir esta página utilizando o recurso do navegador.',
		'display_warning':'Mais informações sobre as classes.',
		/* Texts inside javascript. */
		'refresh_data':'Tentar carregar os dados.',
		'months_of_prodes_year':['Ago','Set','Out','Nov','Dez','Jan','Fev','Mar','Abr','Mai','Jun','Jul'],
		'footer1':'Gerado pelo INPE/OBT/DPI/TerraBrasilis em',
		'footer2':'sob licença <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">CC BY-SA 4.0</a>',
		'failure_load_data':'Falhou ao carregar os dados.',
		'focus_y_label':'Área total (km²)',
		'focus_x_label':'Meses do ano PRODES',
		'overview_x_label':'Seleção temporal (granularidade mensal)',
		'area': 'Área',
		'unit': 'km²',
		'warning_class':'Classe válida apenas para o ano PRODES 2015/2016',
		'barArea_x_label':'Ano PRODES'
	},
	'en':{
		/* texts into HTML entities */
		'txt1':'DETER panel - monthly',
		'txt2':'Open the Daily Panel',
		'txt3':'Download CSV',
		'txt4':'Print',
		'txt5':'Darken/Enlighten',
		'txt6':'Login',
		'txt7':'Have no data.',
		'txt8':'Filter:',
		'txt9':'Filter:',
		'txt10':'Filter:',
		'txt11':'Filter:',
		'txt12':'The print this document use the browser resources and may have differences among themselves.<br />'+
		'The charts stay well arranged over the print document when the following configurations is defined:<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper orientation is landscape;<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper size is A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- And the margins is the default of the browser.<br />',
		'txt13':'Warning',
		'txt14':'The map filters isn\'t applied in this panel.',
		'txt15':'Variation of DETER project area detection, with monthly granularity and year PRODES seasonality (August to July)',
		'txt16':'Filters by States, Classes and year PRODES (August to July).',
		'txt17':'The <strong>Selective Logging</strong> class refers to the sum of the classes Geometric Selective Logging and Disordered Selective Logging for the year PRODES 2015/2016, when these classes were not yet discretized.',
		'txt18':'Clean this filter.',
		'txt19':'Clean this filter.',
		'txt20':'Clean this filter.',
		'txt21':'Clean this filter.',
		'txt22':'Complementar informations',
		'txt23':'The classes representing deforestation alerts are Mining, Deforestation with vegetation and Deforestation with exposed soil.',
		'txt24':'Complete informations about the DETER project.',
		'txt25':'Close',
		'txt26':'Conclude',
		/* titles for HTML entities */
		'aggregate_daily':'Exchange by the analysis panel to daily data.',
		'download-csv-monthly':'Download the raw data, monthly granularity, in CSV format.',
		'prepare_print':'Print this page using the browser resources.',
		'change_style':'Exchange the presentation style dark/clear.',
		'print_page':'Print this page using the browser resources.',
		'display_warning':'More informations about the classes.',
		/* Texts inside javascript. */
		'refresh_data':'Retry the data load.',
		'months_of_prodes_year':['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'],
		'footer1':'Generated by the INPE/OBT/DPI/TerraBrasilis in',
		'footer2':'under license <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>',
		'failure_load_data':'Failure in data loading.',
		'focus_y_label':'Total area (km²)',
		'focus_x_label':'Months of PRODES year',
		'overview_x_label':'Temporal selection (monthly granularity)',
		'area': 'Area',
		'unit': 'km²',
		'warning_class':'Class valid only for year PRODES 2015/1016',
		'barArea_x_label':'Year PRODES'
	},
	'es':{
		/* texts into HTML entities */
		'txt1':'Panel mensual de DETER',
		'txt2':'Abrir el Panel Diario',
		'txt3':'Descargar CSV',
		'txt4':'Imprimir',
		'txt5':'Oscurecer/Aclarar',
		'txt6':'Iniciar sesión',
		'txt7':'No hay datos.',
		'txt8':'Filtro:',
		'txt9':'Filtro:',
		'txt10':'Filtro:',
		'txt11':'Filtro:',
		'txt12':'La impresión de este documento utiliza las características del navegador y puede mostrar diferencias entre ellos.<br />'+
		'La impresión acomoda bien los gráficos cuando las configuraciones son las siguientes:<br />'+
		'&nbsp;&nbsp;&nbsp;- La orientación del papel es del tipo de paisaje;<br />'+
		'&nbsp;&nbsp;&nbsp;- El tamaño de papel es A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- Los márgenes estándar del navegador.<br />',
		'txt13':'Advertencia',
		'txt14':'Este panel no se ve afectado por los filtros definidos en el mapa.',
		'txt15':'Variación de la detección del área del proyecto DETER, con granularidad mensual y año de estacionalidad del PRODES (Agosto a Julio)',
		'txt16':'Filtros por Estados, Clases y año PRODES (Agosto a Julio)',
		'txt17':'La clase <b>Corte Selectivo</b> se refiere a la suma de las clases Corte Selectivo Geométrico y Corte Selectivo Desordenado para el año PRODES 2015/2016, cuando estas clases aún no eran discretizadas.',
		'txt18':'Limpiar este filtro.',
		'txt19':'Limpiar este filtro.',
		'txt20':'Limpiar este filtro.',
		'txt21':'Limpiar este filtro.',
		'txt22':'Informaciones complementarias',
		'txt23':'Las clases que representan alertas de deforestación son Minería, Deforestación con vegetación y Deforestación con suelo expuesto.',
		'txt24':'Información completa sobre el proyecto DETER.',
		'txt25':'Cerrar',
		'txt26':'Concluir',
		/* titles for HTML entities */
		'aggregate_daily':'Cambie al panel de consulta de datos diarios.',
		'download-csv-monthly':'Descargar los datos brutos, granularidad mensual, en formato CSV.',
		'prepare_print':'Imprimir esta página utilizando la función del navegador.',
		'change_style':'Alternar el estilo de presentación claro/oscuro.',
		'print_page':'Imprimir esta página utilizando la función del navegador.',
		'display_warning':'Más informaciones sobre las clases.',
		/* Texts inside javascript. */
		'refresh_data':'Intentar cargar los datos.',
		'months_of_prodes_year':['Ago','Sep','Oct','Nov','Dic','Ene','Feb','Mar','Abr','May','Jun','Jul'],
		'footer1':'Generado por el INPE/OBT/DPI/TerraBrasilis en',
		'footer2':'bajo licencia <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0/deed.es">CC BY-SA 4.0</a>',
		'failure_load_data':'No se pudo cargar los datos.',
		'focus_y_label':'Área total (km²)',
		'focus_x_label':'Meses del año PRODES',
		'overview_x_label':'Selección temporal (granularidad mensual)',
		'area': 'Área',
		'unit': 'km²',
		'warning_class':'Clase válida sólo para el año PRODES 2015/2016',
		'barArea_x_label':'Año PRODES'
	}
};