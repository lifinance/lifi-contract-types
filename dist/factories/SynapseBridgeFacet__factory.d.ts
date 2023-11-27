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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002a0c38038062002a0c833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516129716200009b6000396000818161066501526106b401526129716000f3fe6080604052600436106100295760003560e01c80637d9dd78b1461002e5780639700ad7514610043575b600080fd5b61004161003c366004612225565b610056565b005b6100416100513660046122e4565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612380565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104cf565b60c08b01526102588a88610617565b50479150508181111561027a5761027a6000846102758585612380565b610786565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103143447612380565b905061031f85612393565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103f486612393565b80610100015115610431576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a87612393565b80610120015115610477576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049461048a60a08a0160808b0161239f565b8960c001356107bc565b6104a66104a089612393565b88610617565b5047915050818111156104c3576104c36000846102758585612380565b50506000909155505050565b60008280820361050b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561051a600185612380565b818110610529576105296123ba565b905060200281019061053b91906123e9565b61054c90608081019060600161239f565b9050600061055982610932565b905073ffffffffffffffffffffffffffffffffffffffff8216610583576105803482612380565b90505b600061058f88886109eb565b905061059b8888610af7565b6105a88a89898985610b64565b6000826105b485610932565b6105be9190612380565b905089811015610609576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015160009073ffffffffffffffffffffffffffffffffffffffff811661065b57505060c082015173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee61068e565b61068e84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f16565b60a084015160e085015160c086015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263c228814792869286906106e98a80612427565b6106f660208c018c612427565b6040518863ffffffff1660e01b81526004016107179695949392919061256f565b6000604051808303818588803b15801561073057600080fd5b505af1158015610744573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107789190612641565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107b2576107ad838383611059565b505050565b6107ad82826111db565b806000036107f6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661084f578034101561084b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e09190612754565b905081811015610926576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610600565b6107ad83333085611305565b600073ffffffffffffffffffffffffffffffffffffffff8216156109e3576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156109ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109de9190612754565b6109e5565b475b92915050565b60608160008167ffffffffffffffff811115610a0957610a09611f9f565b604051908082528060200260200182016040528015610a32578160200160208202803683370190505b5090506000805b83811015610aec57868682818110610a5357610a536123ba565b9050602002810190610a6591906123e9565b610a7690608081019060600161239f565b9150610a8182610932565b838281518110610a9357610a936123ba565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ae45734838281518110610acc57610acc6123ba565b60200260200101818151610ae09190612380565b9052505b600101610a39565b509095945050505050565b60005b818110156107ad5736838383818110610b1557610b156123ba565b9050602002810190610b2791906123e9565b9050610b3960e0820160c0830161276d565b15610b5b57610b5b610b51606083016040840161239f565b82608001356107bc565b50600101610afa565b838383838260018114610e315760008585610b80600185612380565b818110610b8f57610b8f6123ba565b9050602002810190610ba191906123e9565b610bb290608081019060600161239f565b9050600089815b81811015610d5d57368d8d83818110610bd457610bd46123ba565b9050602002810190610be691906123e9565b9050610c15610bfb606083016040840161239f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c785750610c78610c2e604083016020840161239f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c8f5750610c8f610c2e602083018361239f565b8015610d145750610d14610ca660a083018361278a565b610cb5916004916000916127f6565b610cbe91612820565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d4a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d548f8261151f565b50600101610bb9565b505060005b610d6d600185612380565b811015610e29576000888883818110610d8857610d886123ba565b9050602002810190610d9a91906123e9565b610dab90608081019060600161239f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e2057858281518110610df257610df26123ba565b6020026020010151610e0382610932565b610e0d9190612380565b92508215610e2057610e20818885610786565b50600101610d62565b505050610f0a565b8760005b81811015610f0757368b8b83818110610e5057610e506123ba565b9050602002810190610e6291906123e9565b9050610e77610bfb606083016040840161239f565b80610e905750610e90610c2e604083016020840161239f565b8015610ea75750610ea7610c2e602083018361239f565b8015610ebe5750610ebe610ca660a083018361278a565b610ef4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610efe8d8261151f565b50600101610e35565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f3657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f83576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101c9190612754565b10156107ad5761102e83836000611835565b6107ad83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611835565b73ffffffffffffffffffffffffffffffffffffffff83166110a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611160573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111849190612754565b9050808211156111ca576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610600565b6111d5848484611a35565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611228576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561126b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610600565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112c5576040519150601f19603f3d011682016040523d82523d6000602084013e6112ca565b606091505b50509050806107ad576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611352576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661139f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611410573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114349190612754565b905061144282868686611a8b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156114b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d69190612754565b6114e09190612380565b14611517576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61153561152f602083018361239f565b3b151590565b61156b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115ab576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115c0610bfb606085016040860161239f565b6115cb5760006115d1565b82608001355b905060006115ed6115e8606086016040870161239f565b610932565b905060006116046115e8608087016060880161239f565b90508260000361163b5761163b611621606087016040880161239f565b611631604088016020890161239f565b8760800135610f16565b8460800135821015611686576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610600565b600080611696602088018861239f565b73ffffffffffffffffffffffffffffffffffffffff16856116ba60a08a018a61278a565b6040516116c8929190612868565b60006040518083038185875af1925050503d8060008114611705576040519150601f19603f3d011682016040523d82523d6000602084013e61170a565b606091505b50915091508161175557600061171f82611ae9565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106009190612878565b600061176a6115e860808a0160608b0161239f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961179b60208b018b61239f565b6117ab60608c0160408d0161239f565b6117bb60808d0160608e0161239f565b8c608001358987116117cd57866117d7565b6117d78a88612380565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b8015806118d557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156118af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d39190612754565b155b611961576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610600565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107ad9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b67565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107ad9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119b3565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111d59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016119b3565b6060604482511015611b2e57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b4a6004808551611b429190612380565b859190611c76565b905080806020019051810190611b60919061288b565b9392505050565b6000611bc9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d909092919063ffffffff16565b9050805160001480611bea575080806020019051810190611bea91906128f9565b6107ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610600565b606081611c8481601f612916565b1015611cbc576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cc68284612916565b84511015611d00576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d1f5760405191506000825260208201604052611d87565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d58578051835260209283019201611d40565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611d9f8484600085611da7565b949350505050565b606082471015611e39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610600565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e629190612929565b60006040518083038185875af1925050503d8060008114611e9f576040519150601f19603f3d011682016040523d82523d6000602084013e611ea4565b606091505b5091509150611eb587838387611ec0565b979650505050505050565b60608315611f56578251600003611f4f5773ffffffffffffffffffffffffffffffffffffffff85163b611f4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610600565b5081611d9f565b611d9f8383815115611f6b5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106009190612878565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611ff257611ff2611f9f565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561203f5761203f611f9f565b604052919050565b600067ffffffffffffffff82111561206157612061611f9f565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261209e57600080fd5b81356120b16120ac82612047565b611ff8565b8181528460208386010111156120c657600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461210757600080fd5b919050565b801515811461211a57600080fd5b50565b80356121078161210c565b6000610140828403121561213b57600080fd5b612143611fce565b905081358152602082013567ffffffffffffffff8082111561216457600080fd5b6121708583860161208d565b6020840152604084013591508082111561218957600080fd5b506121968482850161208d565b6040830152506121a8606083016120e3565b60608201526121b9608083016120e3565b60808201526121ca60a083016120e3565b60a082015260c082013560c082015260e082013560e08201526101006121f181840161211d565b9082015261012061220383820161211d565b9082015292915050565b60006040828403121561221f57600080fd5b50919050565b6000806000806060858703121561223b57600080fd5b843567ffffffffffffffff8082111561225357600080fd5b61225f88838901612128565b9550602087013591508082111561227557600080fd5b818701915087601f83011261228957600080fd5b81358181111561229857600080fd5b8860208260051b85010111156122ad57600080fd5b6020830195508094505060408701359150808211156122cb57600080fd5b506122d88782880161220d565b91505092959194509250565b600080604083850312156122f757600080fd5b823567ffffffffffffffff8082111561230f57600080fd5b90840190610140828703121561232457600080fd5b9092506020840135908082111561233a57600080fd5b506123478582860161220d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156109e5576109e5612351565b60006109e53683612128565b6000602082840312156123b157600080fd5b611b60826120e3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261241d57600080fd5b9190910192915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6183360301811261241d57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff806124c5846120e3565b168452806124d5602085016120e3565b16602085015250604082013560408401526060820135606084015260808201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe183360301811261252557600080fd5b820160208101903567ffffffffffffffff81111561254257600080fd5b80360382131561255157600080fd5b60a0608086015261256660a08601828461245b565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015260c060808301526125b460c08301856124a4565b82810360a08401526125c681856124a4565b9998505050505050505050565b60005b838110156125ee5781810151838201526020016125d6565b50506000910152565b6000815180845261260f8160208601602086016125d3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261266a6101608501836125f7565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126a583826125f7565b92505060608501516126cf608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127428187018315159052565b90950151151593019290925250919050565b60006020828403121561276657600080fd5b5051919050565b60006020828403121561277f57600080fd5b8135611b608161210c565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127bf57600080fd5b83018035915067ffffffffffffffff8211156127da57600080fd5b6020019150368190038213156127ef57600080fd5b9250929050565b6000808585111561280657600080fd5b8386111561281357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128605780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b6060208301846125f7565b60006020828403121561289d57600080fd5b815167ffffffffffffffff8111156128b457600080fd5b8201601f810184136128c557600080fd5b80516128d36120ac82612047565b8181528560208385010111156128e857600080fd5b6125668260208301602086016125d3565b60006020828403121561290b57600080fd5b8151611b608161210c565b808201808211156109e5576109e5612351565b6000825161241d8184602087016125d356fea264697066735822122064967d45a02b1c93df7c947ebce76097fb31a978e5cdfb9c12bab242339c151264736f6c63430008110033";
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
