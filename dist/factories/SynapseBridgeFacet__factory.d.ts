import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SynapseBridgeFacet, SynapseBridgeFacetInterface } from "../SynapseBridgeFacet";
declare type SynapseBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SynapseBridgeFacet__factory extends ContractFactory {
    constructor(...args: SynapseBridgeFacetConstructorParams);
    deploy(_synapseRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SynapseBridgeFacet>;
    getDeployTransaction(_synapseRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SynapseBridgeFacet;
    connect(signer: Signer): SynapseBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002a1d38038062002a1d833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516129826200009b6000396000818161066501526106b401526129826000f3fe6080604052600436106100295760003560e01c80637d9dd78b1461002e5780639700ad7514610043575b600080fd5b61004161003c366004612236565b610056565b005b6100416100513660046122f5565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612391565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104cf565b60c08b01526102588a88610617565b50479150508181111561027a5761027a6000846102758585612391565b610786565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103143447612391565b905061031f856123a4565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103f4866123a4565b80610100015115610431576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a876123a4565b80610120015115610477576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049461048a60a08a0160808b016123b0565b8960c001356107bc565b6104a66104a0896123a4565b88610617565b5047915050818111156104c3576104c36000846102758585612391565b50506000909155505050565b60008280820361050b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561051a600185612391565b818110610529576105296123cb565b905060200281019061053b91906123fa565b61054c9060808101906060016123b0565b9050600061055982610932565b905073ffffffffffffffffffffffffffffffffffffffff8216610583576105803482612391565b90505b600061058f88886109eb565b905061059b8888610af7565b6105a88a89898985610b64565b6000826105b485610932565b6105be9190612391565b905089811015610609576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015160009073ffffffffffffffffffffffffffffffffffffffff811661065b57505060c082015173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee61068e565b61068e84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f16565b60a084015160e085015160c086015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263c228814792869286906106e98a80612438565b6106f660208c018c612438565b6040518863ffffffff1660e01b815260040161071796959493929190612580565b6000604051808303818588803b15801561073057600080fd5b505af1158015610744573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107789190612652565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107b2576107ad838383611059565b505050565b6107ad82826111db565b806000036107f6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661084f578034101561084b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e09190612765565b905081811015610926576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610600565b6107ad83333085611305565b600073ffffffffffffffffffffffffffffffffffffffff8216156109e3576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156109ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109de9190612765565b6109e5565b475b92915050565b60608160008167ffffffffffffffff811115610a0957610a09611fb0565b604051908082528060200260200182016040528015610a32578160200160208202803683370190505b5090506000805b83811015610aec57868682818110610a5357610a536123cb565b9050602002810190610a6591906123fa565b610a769060808101906060016123b0565b9150610a8182610932565b838281518110610a9357610a936123cb565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ae45734838281518110610acc57610acc6123cb565b60200260200101818151610ae09190612391565b9052505b600101610a39565b509095945050505050565b60005b818110156107ad5736838383818110610b1557610b156123cb565b9050602002810190610b2791906123fa565b9050610b3960e0820160c0830161277e565b15610b5b57610b5b610b5160608301604084016123b0565b82608001356107bc565b50600101610afa565b838383838260018114610e315760008585610b80600185612391565b818110610b8f57610b8f6123cb565b9050602002810190610ba191906123fa565b610bb29060808101906060016123b0565b9050600089815b81811015610d5d57368d8d83818110610bd457610bd46123cb565b9050602002810190610be691906123fa565b9050610c15610bfb60608301604084016123b0565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c785750610c78610c2e60408301602084016123b0565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c8f5750610c8f610c2e60208301836123b0565b8015610d145750610d14610ca660a083018361279b565b610cb591600491600091612807565b610cbe91612831565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d4a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d548f82611530565b50600101610bb9565b505060005b610d6d600185612391565b811015610e29576000888883818110610d8857610d886123cb565b9050602002810190610d9a91906123fa565b610dab9060808101906060016123b0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e2057858281518110610df257610df26123cb565b6020026020010151610e0382610932565b610e0d9190612391565b92508215610e2057610e20818885610786565b50600101610d62565b505050610f0a565b8760005b81811015610f0757368b8b83818110610e5057610e506123cb565b9050602002810190610e6291906123fa565b9050610e77610bfb60608301604084016123b0565b80610e905750610e90610c2e60408301602084016123b0565b8015610ea75750610ea7610c2e60208301836123b0565b8015610ebe5750610ebe610ca660a083018361279b565b610ef4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610efe8d82611530565b50600101610e35565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f3657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f83576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101c9190612765565b10156107ad5761102e83836000611846565b6107ad83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611846565b73ffffffffffffffffffffffffffffffffffffffff83166110a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611160573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111849190612765565b9050808211156111ca576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610600565b6111d5848484611a46565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611228576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561126b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610600565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112c5576040519150601f19603f3d011682016040523d82523d6000602084013e6112ca565b606091505b50509050806107ad576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611352576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661139f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611410573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114349190612765565b905061144282868686611a9c565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa1580156114b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d79190612765565b6114e19190612391565b9050836114ef826001612879565b1015611527576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b61154661154060208301836123b0565b3b151590565b61157c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115bc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115d1610bfb60608501604086016123b0565b6115dc5760006115e2565b82608001355b905060006115fe6115f960608601604087016123b0565b610932565b905060006116156115f960808701606088016123b0565b90508260000361164c5761164c61163260608701604088016123b0565b61164260408801602089016123b0565b8760800135610f16565b8460800135821015611697576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610600565b6000806116a760208801886123b0565b73ffffffffffffffffffffffffffffffffffffffff16856116cb60a08a018a61279b565b6040516116d992919061288c565b60006040518083038185875af1925050503d8060008114611716576040519150601f19603f3d011682016040523d82523d6000602084013e61171b565b606091505b50915091508161176657600061173082611afa565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610600919061289c565b600061177b6115f960808a0160608b016123b0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117ac60208b018b6123b0565b6117bc60608c0160408d016123b0565b6117cc60808d0160608e016123b0565b8c608001358987116117de57866117e8565b6117e88a88612391565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b8015806118e657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156118c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e49190612765565b155b611972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610600565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107ad9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b78565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107ad9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119c4565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111d59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016119c4565b6060604482511015611b3f57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b5b6004808551611b539190612391565b859190611c87565b905080806020019051810190611b7191906128af565b9392505050565b6000611bda826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611da19092919063ffffffff16565b9050805160001480611bfb575080806020019051810190611bfb919061291d565b6107ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610600565b606081611c9581601f612879565b1015611ccd576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cd78284612879565b84511015611d11576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d305760405191506000825260208201604052611d98565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d69578051835260209283019201611d51565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611db08484600085611db8565b949350505050565b606082471015611e4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610600565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e73919061293a565b60006040518083038185875af1925050503d8060008114611eb0576040519150601f19603f3d011682016040523d82523d6000602084013e611eb5565b606091505b5091509150611ec687838387611ed1565b979650505050505050565b60608315611f67578251600003611f605773ffffffffffffffffffffffffffffffffffffffff85163b611f60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610600565b5081611db0565b611db08383815115611f7c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610600919061289c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561200357612003611fb0565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561205057612050611fb0565b604052919050565b600067ffffffffffffffff82111561207257612072611fb0565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126120af57600080fd5b81356120c26120bd82612058565b612009565b8181528460208386010111156120d757600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461211857600080fd5b919050565b801515811461212b57600080fd5b50565b80356121188161211d565b6000610140828403121561214c57600080fd5b612154611fdf565b905081358152602082013567ffffffffffffffff8082111561217557600080fd5b6121818583860161209e565b6020840152604084013591508082111561219a57600080fd5b506121a78482850161209e565b6040830152506121b9606083016120f4565b60608201526121ca608083016120f4565b60808201526121db60a083016120f4565b60a082015260c082013560c082015260e082013560e082015261010061220281840161212e565b9082015261012061221483820161212e565b9082015292915050565b60006040828403121561223057600080fd5b50919050565b6000806000806060858703121561224c57600080fd5b843567ffffffffffffffff8082111561226457600080fd5b61227088838901612139565b9550602087013591508082111561228657600080fd5b818701915087601f83011261229a57600080fd5b8135818111156122a957600080fd5b8860208260051b85010111156122be57600080fd5b6020830195508094505060408701359150808211156122dc57600080fd5b506122e98782880161221e565b91505092959194509250565b6000806040838503121561230857600080fd5b823567ffffffffffffffff8082111561232057600080fd5b90840190610140828703121561233557600080fd5b9092506020840135908082111561234b57600080fd5b506123588582860161221e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156109e5576109e5612362565b60006109e53683612139565b6000602082840312156123c257600080fd5b611b71826120f4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261242e57600080fd5b9190910192915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6183360301811261242e57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff806124d6846120f4565b168452806124e6602085016120f4565b16602085015250604082013560408401526060820135606084015260808201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe183360301811261253657600080fd5b820160208101903567ffffffffffffffff81111561255357600080fd5b80360382131561256257600080fd5b60a0608086015261257760a08601828461246c565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015260c060808301526125c560c08301856124b5565b82810360a08401526125d781856124b5565b9998505050505050505050565b60005b838110156125ff5781810151838201526020016125e7565b50506000910152565b600081518084526126208160208601602086016125e4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261267b610160850183612608565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126b68382612608565b92505060608501516126e0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127538187018315159052565b90950151151593019290925250919050565b60006020828403121561277757600080fd5b5051919050565b60006020828403121561279057600080fd5b8135611b718161211d565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127d057600080fd5b83018035915067ffffffffffffffff8211156127eb57600080fd5b60200191503681900382131561280057600080fd5b9250929050565b6000808585111561281757600080fd5b8386111561282457600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128715780818660040360031b1b83161692505b505092915050565b808201808211156109e5576109e5612362565b8183823760009101908152919050565b602081526000611b716020830184612608565b6000602082840312156128c157600080fd5b815167ffffffffffffffff8111156128d857600080fd5b8201601f810184136128e957600080fd5b80516128f76120bd82612058565b81815285602083850101111561290c57600080fd5b6125778260208301602086016125e4565b60006020828403121561292f57600080fd5b8151611b718161211d565b6000825161242e8184602087016125e456fea26469706673582212204ff31005f6a7174800e718d612613e704b3ed1e7f28735bda3d9ce30608d568064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_synapseRouter";
            readonly type: "address";
            readonly internalType: "contract ISynapseRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSynapseBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_synapseData";
            readonly type: "tuple";
            readonly internalType: "struct SynapseBridgeFacet.SynapseData";
            readonly components: readonly [{
                readonly name: "originQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "destQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSynapseBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_synapseData";
            readonly type: "tuple";
            readonly internalType: "struct SynapseBridgeFacet.SynapseData";
            readonly components: readonly [{
                readonly name: "originQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "destQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): SynapseBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SynapseBridgeFacet;
}
export {};
