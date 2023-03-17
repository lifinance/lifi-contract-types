import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeL2Facet, GnosisBridgeL2FacetInterface } from "../GnosisBridgeL2Facet";
declare type GnosisBridgeL2FacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeL2Facet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeL2FacetConstructorParams);
    deploy(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeL2Facet>;
    getDeployTransaction(_xDaiBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeL2Facet;
    connect(signer: Signer): GnosisBridgeL2Facet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620028ea380380620028ea833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128566200009460003960006106e201526128566000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610043575b600080fd5b61004161003c36600461228e565b610056565b005b6100416100513660046122c3565b610325565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761238c565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86600167ffffffffffffffff16808260e001511461027f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080890151899060009073ffffffffffffffffffffffffffffffffffffffff16156102d6576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102df8b610693565b50505050505050600047905060008282116102fb576000610305565b610305838361238c565b90508015610319576103196000858361077a565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103a0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010084015184906103e2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610420576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856104438160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561047a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104b8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86600167ffffffffffffffff16808260e001511461053f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080890151899060009073ffffffffffffffffffffffffffffffffffffffff1615610596576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008990036105d1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008a8a6105e060018261238c565b8181106105ef576105ef61239f565b905060200281019061060191906123ce565b61061290608081019060600161240c565b73ffffffffffffffffffffffffffffffffffffffff161461065f576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106748b600001518c60c001518c8c336107b0565b60c08c01526106828b610693565b505060009095555050505050505050565b60c081015160a08201516040517f5d1e930700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691635d1e9307916024016000604051808303818588803b15801561072757600080fd5b505af115801561073b573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161076f9190612495565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156107a6576107a18383836108f8565b505050565b6107a18282610a2d565b6000828082036107ec576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856107fb60018561238c565b81811061080a5761080a61239f565b905060200281019061081c91906123ce565b61082d90608081019060600161240c565b9050600061083a82610b57565b905073ffffffffffffffffffffffffffffffffffffffff821661086457610861348261238c565b90505b60006108708888610c10565b905061087c8888610d1c565b6108898a89898985610d7d565b60008261089585610b57565b61089f919061238c565b9050898110156108ea576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610945576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156109b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d691906125a8565b905080821115610a1c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108e1565b610a2784848461112f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a7a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610abd576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016108e1565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610b17576040519150601f19603f3d011682016040523d82523d6000602084013e610b1c565b606091505b50509050806107a1576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610c08576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610bdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0391906125a8565b610c0a565b475b92915050565b60608160008167ffffffffffffffff811115610c2e57610c2e611ffd565b604051908082528060200260200182016040528015610c57578160200160208202803683370190505b5090506000805b83811015610d1157868682818110610c7857610c7861239f565b9050602002810190610c8a91906123ce565b610c9b90608081019060600161240c565b9150610ca682610b57565b838281518110610cb857610cb861239f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d095734838281518110610cf157610cf161239f565b60200260200101818151610d05919061238c565b9052505b600101610c5e565b509095945050505050565b60005b818110156107a1576000838383818110610d3b57610d3b61239f565b9050602002810190610d4d91906123ce565b610d56906125c1565b90508060c0015115610d7457610d7481604001518260800151611203565b50600101610d1f565b83838383826001811461104a5760008585610d9960018561238c565b818110610da857610da861239f565b9050602002810190610dba91906123ce565b610dcb90608081019060600161240c565b9050600089815b81811015610f7657368d8d83818110610ded57610ded61239f565b9050602002810190610dff91906123ce565b9050610e2e610e14606083016040840161240c565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e915750610e91610e47604083016020840161240c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ea85750610ea8610e47602083018361240c565b8015610f2d5750610f2d610ebf60a0830183612666565b610ece916004916000916126d2565b610ed7916126fc565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f63576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f6d8f82611379565b50600101610dd2565b505060005b610f8660018561238c565b811015611042576000888883818110610fa157610fa161239f565b9050602002810190610fb391906123ce565b610fc490608081019060600161240c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110395785828151811061100b5761100b61239f565b602002602001015161101c82610b57565b611026919061238c565b925082156110395761103981888561077a565b50600101610f7b565b505050611123565b8760005b8181101561112057368b8b838181106110695761106961239f565b905060200281019061107b91906123ce565b9050611090610e14606083016040840161240c565b806110a957506110a9610e47604083016020840161240c565b80156110c057506110c0610e47602083018361240c565b80156110d757506110d7610ebf60a0830183612666565b61110d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111178d82611379565b5060010161104e565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107a19084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261168f565b73ffffffffffffffffffffffffffffffffffffffff821661125c5780341015611258576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003611296576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611303573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132791906125a8565b90508181101561136d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108e1565b6107a18333308561179b565b61138f611389602083018361240c565b3b151590565b6113c5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611405576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061141a610e14606085016040860161240c565b61142557600061142b565b82608001355b90506000611447611442606086016040870161240c565b610b57565b9050600061145e611442608087016060880161240c565b9050826000036114955761149561147b606087016040880161240c565b61148b604088016020890161240c565b87608001356119b5565b84608001358210156114e0576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108e1565b6000806114f0602088018861240c565b73ffffffffffffffffffffffffffffffffffffffff168561151460a08a018a612666565b604051611522929190612744565b60006040518083038185875af1925050503d806000811461155f576040519150601f19603f3d011682016040523d82523d6000602084013e611564565b606091505b5091509150816115af57600061157982611afa565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e19190612754565b60006115c461144260808a0160608b0161240c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896115f560208b018b61240c565b61160560608c0160408d0161240c565b61161560808d0160608e0161240c565b8c608001358987116116275786611631565b6116318a8861238c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60006116f1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b789092919063ffffffff16565b8051909150156107a1578080602001905181019061170f9190612767565b6107a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016108e1565b73ffffffffffffffffffffffffffffffffffffffff84166117e8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611835576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156118a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ca91906125a8565b90506118d882868686611b8f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196c91906125a8565b611976919061238c565b146119ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166119d557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a22576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611a98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611abc91906125a8565b905081811015610a2757610a278484611af5847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61238c565b611bed565b6060604482511015611b3f57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b5b6004808551611b53919061238c565b859190611ceb565b905080806020019051810190611b719190612784565b9392505050565b6060611b878484600085611e05565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610a279085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611181565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611c64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c8891906125a8565b611c9291906127fb565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610a279085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611181565b606081611cf981601f6127fb565b1015611d31576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d3b82846127fb565b84511015611d75576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d945760405191506000825260208201604052611dfc565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dcd578051835260209283019201611db5565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611e97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016108e1565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ec0919061280e565b60006040518083038185875af1925050503d8060008114611efd576040519150601f19603f3d011682016040523d82523d6000602084013e611f02565b606091505b5091509150611f1387838387611f1e565b979650505050505050565b60608315611fb4578251600003611fad5773ffffffffffffffffffffffffffffffffffffffff85163b611fad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016108e1565b5081611b87565b611b878383815115611fc95781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e19190612754565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561205057612050611ffd565b60405290565b60405160e0810167ffffffffffffffff8111828210171561205057612050611ffd565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120c0576120c0611ffd565b604052919050565b600067ffffffffffffffff8211156120e2576120e2611ffd565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261211f57600080fd5b813561213261212d826120c8565b612079565b81815284602083860101111561214757600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461218857600080fd5b919050565b801515811461219b57600080fd5b50565b80356121888161218d565b600061014082840312156121bc57600080fd5b6121c461202c565b905081358152602082013567ffffffffffffffff808211156121e557600080fd5b6121f18583860161210e565b6020840152604084013591508082111561220a57600080fd5b506122178482850161210e565b60408301525061222960608301612164565b606082015261223a60808301612164565b608082015261224b60a08301612164565b60a082015260c082013560c082015260e082013560e082015261010061227281840161219e565b9082015261012061228483820161219e565b9082015292915050565b6000602082840312156122a057600080fd5b813567ffffffffffffffff8111156122b757600080fd5b611b87848285016121a9565b6000806000604084860312156122d857600080fd5b833567ffffffffffffffff808211156122f057600080fd5b6122fc878388016121a9565b9450602086013591508082111561231257600080fd5b818601915086601f83011261232657600080fd5b81358181111561233557600080fd5b8760208260051b850101111561234a57600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c0a57610c0a61235d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261240257600080fd5b9190910192915050565b60006020828403121561241e57600080fd5b611b7182612164565b60005b8381101561244257818101518382015260200161242a565b50506000910152565b60008151808452612463816020860160208601612427565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124be61016085018361244b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124f9838261244b565b9250506060850151612523608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125968187018315159052565b90950151151593019290925250919050565b6000602082840312156125ba57600080fd5b5051919050565b600060e082360312156125d357600080fd5b6125db612056565b6125e483612164565b81526125f260208401612164565b602082015261260360408401612164565b604082015261261460608401612164565b60608201526080830135608082015260a083013567ffffffffffffffff81111561263d57600080fd5b6126493682860161210e565b60a08301525061265b60c0840161219e565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261269b57600080fd5b83018035915067ffffffffffffffff8211156126b657600080fd5b6020019150368190038213156126cb57600080fd5b9250929050565b600080858511156126e257600080fd5b838611156126ef57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561273c5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b71602083018461244b565b60006020828403121561277957600080fd5b8151611b718161218d565b60006020828403121561279657600080fd5b815167ffffffffffffffff8111156127ad57600080fd5b8201601f810184136127be57600080fd5b80516127cc61212d826120c8565b8181528560208385010111156127e157600080fd5b6127f2826020830160208601612427565b95945050505050565b80820180821115610c0a57610c0a61235d565b6000825161240281846020870161242756fea264697066735822122055d47e1130b90d3a11194097e00459e10cbd439b89b7ace75308c7b4e235ae7a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IXDaiBridgeL2";
            readonly name: "_xDaiBridge";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDestinationChain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSendingToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaXDaiBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }];
        readonly name: "swapAndStartBridgeTokensViaXDaiBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): GnosisBridgeL2FacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeL2Facet;
}
export {};
